from typing import Annotated

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine, select
from sqlmodel import Field, SQLModel


app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "postgresql+psycopg://postgres:mysecretpassword@localhost:5432/todoapp"

engine = create_engine(DATABASE_URL, pool_pre_ping=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]


class Todos(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    text: str

@app.get("/api/todos")
async def get_todos(session: SessionDep):
  todos = session.exec(select(Todos)).all()
  return todos

app.frontend("/", directory="dist")