# class Books:
#     def __init__(self, title, author, year):
#         self.title = title
#         self.author = author
#         self.year = year
#     def __str__(self):
#         return self


# book1 = Books("Book title", "Sabbir Hossain", 2020)
# print(book1)


# class Book:
#     def __init__(self, title, year):
#         self.title = title
#         self.year = year

#     def getAllDeat(self):
#         print(self.title, self.year)

# book2 = Book("Apple watch", 2020)
# book2.getAllDeat()


# class User:
#     def __init__(userDetails, name, email, password):
#         userDetails.name = name
#         userDetails.email = email
#         userDetails.password = password


#     def details(data):
#         print("Name: {data.name}; Email: {data.email}; Password: {data.password}")
    
# user = User("Sabbir", "em@gmail.com", "sabbir2020")
# print(user)
# user.details()

# class Persons:
#     def __init__(self, fName, lName):
#         self.fName = fName
#         self.lName= lName
#     def printFullName(self):
#         print(self.fName, self.lName)

# class Student(Persons):
#     def __init__(self, fName, lName, age):
#         Persons.__init__(self, fName, lName)
        
#     def addNewAge(self, getAge):
#         return getAge - self.age
#     def welcome(self):
#         print("Welcome", self.fName, self.lName, ". To age of ", self.age)

# student = Student("Sabbir", "Hossain", 20)
# student.welcome()


class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

x = Student("Mike", "Olsen", 2019)
x.welcome()
