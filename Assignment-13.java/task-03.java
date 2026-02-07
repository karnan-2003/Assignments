// Write a program to insert elements at both ends of a Deque : 


import java.util.Scanner;

class Deque {
    int[] deque;
    int front, rear, size;

    Deque(int size) {
        this.size = size;
        deque = new int[size];
        front = -1;
        rear = -1;
    }

    // Insert at front
    void insertFront(int value) {
        if (isFull()) {
            System.out.println("Deque Overflow");
        } else if (front == -1) {   // first element
            front = rear = 0;
            deque[front] = value;
            System.out.println(value + " inserted at front");
        } else if (front == 0) {
            System.out.println("Cannot insert at front");
        } else {
            deque[--front] = value;
            System.out.println(value + " inserted at front");
        }
    }

    // Insert at rear
    void insertRear(int value) {
        if (isFull()) {
            System.out.println("Deque Overflow");
        } else if (rear == -1) {   // first element
            front = rear = 0;
            deque[rear] = value;
            System.out.println(value + " inserted at rear");
        } else if (rear == size - 1) {
            System.out.println("Cannot insert at rear");
        } else {
            deque[++rear] = value;
            System.out.println(value + " inserted at rear");
        }
    }

    boolean isFull() {
        return (front == 0 && rear == size - 1);
    }

    void display() {
        if (front == -1) {
            System.out.println("Deque is empty");
        } else {
            System.out.print("Deque elements: ");
            for (int i = front; i <= rear; i++) {
                System.out.print(deque[i] + " ");
            }
            System.out.println();
        }
    }
}

public class DequeInsert {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Deque d = new Deque(5);

        d.insertRear(10);
        d.insertRear(20);
        d.insertFront(5);
        d.insertFront(1);
        d.display();

        sc.close();
    }
}
