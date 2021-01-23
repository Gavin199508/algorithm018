from datetime import date
from Time import *
import copy


class Point:
    """
    docstring
    """
    pass


blank = Point()
blank.x = 11
blank.y = 2

x = blank.x


class Rectangle:
    """
    docstring
    """
    pass


box = Rectangle()
box.width = 100.0
box.height = 200.0
box.corner = Point()
box.corner.x = 0.0
box.corner.y = 0.0


def find_center(rect):
    p = Point()
    p.x = rect.corner.x + rect.width/2
    p.y = rect.corner.y + rect.height/2
    print(p)
    return p


center = find_center(box)
print(center)


p1 = Point()
p1.x = 3.0
p1.y = 4.0

p2 = copy.copy(p1)
p3 = p1
print(id(p1))
print(id(p2))
print(id(p3))

print(p1 is p3)

box2 = copy.copy(box)

print(box2.corner is box.corner)
print(box2 is box)

box3 = copy.deepcopy(box)
print(box3 is box)

print(box3.corner is box.corner)


def capitalize_all(t):
    res = []
    for s in t:
        res.append(s.capitalize())
    # return [s.capitalize() for s in t]
    return res


print(1 ^ 2)


class Test:
    a = 10
    b = 100
    ""


t1 = Test()
t1.li = [1, 2, 3]
print(t1.b)
print(isinstance([], list))


def mul_time(time, coef):
    sec = time_to_int(time)
    sec *= coef

    new_time = int_to_time(sec)
    return new_time


t = Time()
t.hour = 1
t.minute = 30
t.second = 30

print_time(t)
print_time(mul_time(t, 4))


today = date.today()

print(today.strftime("%A"))


def print_bday_info():
    today = date.today()
    bday = input('input your birthday:')

    bdate = date.fromisoformat(bdate)

    age = today.year - bdate.year

    next_bday = bdate.replace(year=today.day)
    if next_bday > today:
        age -= 1
        print('', age)

    if next_bday <= today:
        next_bday = bdate.replace(year=today.year+1)
    delta_bday = next_bday-today
    print(delta_bday)


print_bday_info()


class Kangoo:
    def __init__(self, name, contents=[]):
        self.name = name
        if contents == None:
            self.pounch_contents = []
        else:
            self.pounch_contents = contents

    def put_in_pouch(self, obj):
        self.put_in_pouch.append(obj)

    def __str__(self):
        res = 'Contents of ' + self.name + ':\n'
        for item in self.pounch_contents:
            res += '\t' + item.__str__()+'\n'
        return res
