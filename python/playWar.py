from collections import deque
import random
class card:
    value = 0
    suit = "spades"
    name = "joker"

class hand:
    def __init__(self,deck):
        self.cards = deque(deck)
    def addCard(self,woncard):
        self.cards.append(woncard)

class deck:
    suits = ["spades","diamonds","hearts","clubs"]
    cards = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
    def __init__(self):
        self.allcards = []
        for j in self.suits:
            for i in range(2,15):
                newCard = card()
                newCard.value = i
                newCard.suit = j
                newCard.name = self.cards[i-2]
                self.allcards.append(newCard)

    def shuffle(self):
        random.shuffle(self.allcards)
    def split(self):
        half = int(len(self.allcards)/2)
        firsthalf = self.allcards[:half]
        secondhalf = self.allcards[half:]
        firsthand = hand(firsthalf)
        secondhand = hand(secondhalf)
        return firsthand,secondhand
    def printdeck(self):
        for index,acard in enumerate(self.allcards):
            print("%d\t%s of %s" % (index,acard.name,acard.suit))

def playWar(hand1, hand2):
    army1 = []
    army2 = []
    war = False
    while (len(hand1.cards)>0 and len(hand2.cards)>0):
        input("Press ENTER to play a hand")
        card1 = hand1.cards.popleft()
        card2 = hand2.cards.popleft()
        print("%d\t%s\t\t %s\t%d" % (len(hand1.cards),card1.name,card2.name,len(hand2.cards)))
        if (card1.value > card2.value):
            if(war):
                hand1.cards.extend(army1)
                print(len(hand1.cards))
                hand1.cards.extend(army2)
                print(len(hand1.cards))
                army1 = []
                army2 = []
                war = False
            hand1.addCard(card1)
            hand1.addCard(card2)
            print(len(hand1.cards))
        elif (card2.value > card1.value):
            if(war):
                print(len(hand1.cards))
                hand2.cards.extend(army1)
                hand2.cards.extend(army2)
                print(len(hand1.cards))
                army1 = []
                army2 = []
                war = False
            hand2.addCard(card2)
            hand2.addCard(card1)
            print(len(hand1.cards))
        else:
            war = True
            army1.append(card1)
            army2.append(card2)
            for i in range(3):
                army1.append(hand1.cards.popleft())
                army2.append(hand2.cards.popleft())
            print("Cards at stake: %d" % (len(army1)+len(army2))) 


myDeck = deck()
myDeck.shuffle()
#myDeck.printdeck()
player1,player2 = myDeck.split()
playWar(player1,player2)
