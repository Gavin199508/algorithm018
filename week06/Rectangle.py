import copy

class Rectangle:
    """Represents a rectangle. 
    attributes: width, height, corner.
    """


def find_center(rect):
    """Returns a Point at the center of a Rectangle.
    rect: Rectangle
    returns: new Point
    """
    p = Point()
    p.x = rect.corner.x + rect.width/2.0
    p.y = rect.corner.y + rect.height/2.0
    return p


def grow_rectangle(rect, dwidth, dheight):
    """Modifies the Rectangle by adding to its width and height.
    rect: Rectangle object.
    dwidth: change in width (can be negative).
    dheight: change in height (can be negative).
    """
    rect.width += dwidth
    rect.height += dheight
	
def move_rectangle(rect, dx, dy):
    """Move the Rectangle by modifying its corner object.
    rect: Rectangle object.
    dx: change in x coordinate (can be negative).
    dy: change in y coordinate (can be negative).
    """
    rect.corner.x += dx
    rect.corner.y += dy


def move_rectangle_copy(rect, dx, dy):
    """Move the Rectangle and return a new Rectangle object.
    rect: Rectangle object.
    dx: change in x coordinate (can be negative).
    dy: change in y coordinate (can be negative).
    returns: new Rectangle
    """
    new = copy.deepcopy(rect)
    move_rectangle(new, dx, dy)
    return new
