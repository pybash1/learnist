from datetime import date
from ..schemas import LearnistHomework


def create_hw(
    name: str, description: str, due: date, class_: str, assigned_by: str, user: str
):
    if (
        not name
        or not description
        or not due
        or not class_
        or not assigned_by
        or not user
    ):
        return -1

    LearnistHomework(name=name, description=description, due=due, class_=class_, assigned_by=assigned_by, done=False, user=user).save()
    hw = LearnistHomework.query(LearnistHomework.name == name, LearnistHomework.description == description, LearnistHomework.class_ == class_, LearnistHomework.assigned_by == assigned_by, LearnistHomework.done == False, LearnistHomework.user == user)
    return {
        "id": hw.key,
        "name": hw.name,
        "description": hw.description,
        "due": hw.due,
        "class": hw.class_,
        "assigned_by": hw.assigned_by,
        "done": hw.done,
        "user": hw.user
    }

    # with engine.connect() as conn:
    #     conn.execute(
    #         text(
    #             """INSERT INTO homeworks (name, description, due, class, assigned_by, user) VALUES (:name, :desc, :due, :class, :assignee, :user)"""
    #         ),
    #         [
    #             {
    #                 "name": name,
    #                 "desc": description,
    #                 "due": f"{str(due.year)}-{str(due.month)}-{str(due.day)}",
    #                 "class": class_,
    #                 "assignee": assigned_by,
    #                 "user": user,
    #             }
    #         ],
    #     )
    #     conn.commit()
    #     id_ = conn.execute(
    #         text(
    #             "SELECT * FROM homeworks WHERE name = :name AND description = :desc AND due = :due AND assigned_by = :assignee AND user = :user"
    #         ),
    #         [
    #             {
    #                 "name": name,
    #                 "desc": description,
    #                 "due": f"{str(due.year)}-{str(due.month)}-{str(due.day)}",
    #                 "class": class_,
    #                 "assignee": assigned_by,
    #                 "user": user,
    #             }
    #         ],
    #     ).all()[-1][0]
    #     return {
    #         "id": id_,
    #         "name": name,
    #         "description": description,
    #         "due": f"{str(due.year)}-{str(due.month)}-{str(due.day)}",
    #         "class": class_,
    #         "assigned_by": assigned_by,
    #         "user": user,
    #     }


def update_hw(
    id_: int,
    name: str,
    description: str,
    due: date,
    class_: str,
    assigned_by: str,
    done: bool,
    user: str,
):
    if (
        not id_
        or not name
        or not description
        or not due
        or not class_
        or not assigned_by
        or done is None or not isinstance(done, bool)
        or not user
    ):
        return -1

    hw = LearnistHomework.get(id_)
    hw.name, hw.description, hw.due, hw.class_, hw.assigned_by, hw.done, hw.user = name, description, due, class_, assigned_by, done, user
    hw.save()
    return 0

    # with engine.connect() as conn:
    #     conn.execute(
    #         text(
    #             "UPDATE homeworks SET name = :name, description = :desc, due = :due, class = :class, assigned_by = :assignee, user = :user WHERE id = :id"
    #         ),
    #         [
    #             {
    #                 "name": name,
    #                 "desc": description,
    #                 "due": f"{str(due.year)}-{str(due.month)}-{str(due.day)}",
    #                 "class": class_,
    #                 "assignee": assigned_by,
    #                 "user": user,
    #                 "id": id_,
    #             }
    #         ],
    #     )
    #     conn.commit()
    #     return 0


def delete_hw(id_: int):
    if not id_:
        return -1

    # with engine.connect() as conn:
    #     conn.execute(text("DELETE FROM homeworks WHERE id = :id"), [{"id": id_}])
    #     conn.commit()
    #     return 0


def get_hw(id_: str):
    if not id_:
        return None

    with engine.connect() as conn:
        res = conn.execute(
            text("SELECT * FROM homeworks WHERE id = :id"), [{"id": id_}]
        ).all()
        try:
            return res[0]
        except IndexError:
            return None


def get_hws(limit: int = None):
    if limit is not None:
        with engine.connect() as conn:
            res = conn.execute(
                text("SELECT * FROM homeworks LIMIT :limit"), [{"limit": limit}]
            ).all()
            return res
    else:
        with engine.connect() as conn:
            res = conn.execute(
                text("SELECT * FROM homeworks"), [{"limit": limit}]
            ).all()
            return res
