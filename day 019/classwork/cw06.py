# 6) მომხარებელს შემოატანინე სტრინგი. შეამოწმე — სულ დიდი ასოებით არის თუ არა. თუ არის დაპრინტე "string  is uppercase", სხვა შემთხვევაში "string is lowercase"


user_input = input("შეიყვანე სტრინგი: ")
if user_input.isupper():
    print("string is uppercase")
else:
    print("string is lowercase")