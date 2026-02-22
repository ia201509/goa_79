# 7) მომხარებელს შემოატანინე სტრინგი. შეამოწმე — სულ პატარა ასოებით არის თუ არა. თუ არის დაპრინტე "string is lowercase", სხვა შემთხვევაში "string is uppercase"

user_input = input("შეიყვანე სტრინგი: ")
if user_input.islower():
    print("string is lowercase")
else:
    print("string is uppercase")