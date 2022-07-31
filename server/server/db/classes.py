from datetime import date
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine, text
import json

load_dotenv()

engine = create_engine(os.getenv("DB_URI"), future=True)

"""
schedules table schema
CREATE TABLE `schedules` (
	`username` varchar(255) NOT NULL,
	`monday` json,
	`tuesday` json,
	`wednesday` json,
	`thursday` json,
	`friday` json,
	`saturday` json,
	`sunday` json,
	PRIMARY KEY (`username`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
"""


def create_schedule(username: str):
    if not username:
        return -1

    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM schedules")).all()
        res = [i[0] for i in res]
        if username in res:
            return 1

        conn.execute(
            text(
                """INSERT INTO schedules VALUES (:username, "[]", "[]", "[]", "[]", "[]", "[]", "[]")"""
            ),
            [{"username": username}],
        )
        conn.commit()
        return 0


def update_schedule(
    username: str, day: str, stime: str, etime: str, name: str, teacher: str
):
    if not username or not day or not stime or not etime or not name or not teacher:
        return -1

    if day not in [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ]:
        return 2

    with engine.connect() as conn:
        res = conn.execute(
            text("SELECT * FROM schedules WHERE username = :username"),
            [{"username": username, "day": day}],
        ).all()

        days = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
        ]

        sched = json.loads(res[0][days.index(day) + 1])

        new_sched = sched
        new_sched.append(
            {"name": name, "teacher": teacher, "stime": str(stime), "etime": str(etime)}
        )

        query = f"UPDATE schedules SET {day} = :newsched WHERE username = :username"

        conn.execute(
            text(query),
            [
                {
                    "day": day,
                    "newsched": json.dumps(new_sched),
                    "username": username,
                }
            ],
        )
        conn.commit()
        return 0


def get_schedule(username: str):
    if not username:
        return -1

    with engine.connect() as conn:
        res = conn.execute(
            text("SELECT * FROM schedules WHERE username = :username"),
            [{"username": username}],
        ).all()
        return res[0]
