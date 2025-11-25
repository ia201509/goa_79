from turtle import *

#we want to a house

#step 1:  draw a spuare
speed(20)
width(7)
color("purple")
forward(200)
left(90)
end_fill()

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of spuare
#drawing a door

forward(70)
begin_fill()
color("yellow")
left(90)
forward(120)    #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,  200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
left(30)

penup()
color("green")
goto(30,  180)
pendown()
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)

penup()
goto(130,  180)
pendown()
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)

exitonclick()