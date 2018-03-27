#Animal Shelter
#An animal shelter, which holds only dogs and cats, operates on a stricktly "first in first out" basis. People must adopt either the "oldest"  (based on arrival time) of all the animals at the shelter or they can select wheter they would prefer a dog or a cat (and will receive the oldest animal of that type) They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built in linkedList data structure.
import time

class Animal:
    def __init__(self):
        self.inTime = time.time()

class Dog(Animal):
    def __init__(self, name):
        Animal.__init__(self)
        self.name = name

class Cat(Animal):
    def __init__(self, name):
        Animal.__init__(self)
        self.name = name

class AnimalQueue:
    def __init__(self):
        dogs = []
        cats = []

    def enqueue(self, inAni):
        if isinstance(inAni, Dog):
            self.dogs.append(inAni)
        else:
            self.cats.append(inAni)

    def dequeueAny(self):
        if len(self.dogs) == 0:
            return self.cats.pop()
        elif len(self.cats) == 0:
            return self.dogs.pop()
        elif self.dogs[-1].inTime < self.cats[-1].inTime:
            return self.cats.pop()
        else:
            return self.dogs.pop()

    def dequeueDog(self):
        if len(self.dogs) > 0:
            return self.dogs.pop()

    def dequeueCat(self):
        if len(self.cats) > 0:
            return self.dogs.pop()
