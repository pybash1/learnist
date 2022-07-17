from datetime import date, time
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


class Class(BaseModel):
    name: str
    teacher: str
    day: str
    stime: time
    etime: time