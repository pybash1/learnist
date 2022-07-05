from datetime import date
from pydantic import BaseModel


class User(BaseModel):
    email: str
    password: str


class Homework(BaseModel):
    name: str
    description: str
    due: date
    class_: str
    assigned_by: str
