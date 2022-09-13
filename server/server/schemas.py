from datetime import date, time
from typing import Dict, List
from odetam import DetaModel


class LearnistUser(DetaModel):
    email: str
    password: str


class LearnistHomework(DetaModel):
    name: str
    description: str
    due: date
    class_: str
    assigned_by: str
    done: bool
    user: str


class LearnistClass(DetaModel):
    name: str
    teacher: str
    day: str
    stime: time
    etime: time


class LearnistSchedule(DetaModel):
    user: str
    monday: List[Dict]
    tuesday: List[Dict]
    wednesday: List[Dict]
    thursday: List[Dict]
    friday: List[Dict]
    saturday: List[Dict]
    sunday: List[Dict]