// Write a program to implement Queue using Array with all operation :

import java.util.Scanner;

class Queue {
    int front = 0, rear = -1;
    int size = 5;
    int[] queue = new int[size];

    // Enqueue operation
    void enqueue(int value) {
        if (isFull()) {
            System.out.println("Queue Overflow");
        } else {
            queue[++rear] = value;
            System.out.println(value + " inserted into queue");
        }
    }

    // Dequeue operation
    void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow");
        } else {
            System.out.println(queue[front++] + " removed from queue");
        }
    }

    // Peek operation
    void peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
        } else {
            System.out.println("Front element: " + queue[front]);
        }
    }

    // Display operation
    void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
        } else {
            System.out.print("Queue elements: ");
            for (int i = front; i <= rear; i++) {
                System.out.print(queue[i] + " ");
            }
            System.out.println();
        }
    }

    boolean isEmpty() {
        return front > rear;
    }

    boolean isFull() {
        return rear == size - 1;
    }
}

public class QueueArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Queue q = new Queue();
        int choice, value;

        do {
            System.out.println("\n1.Enqueue  2.Dequeue  3.Peek  4.Display  5.Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter value: ");
                    value = sc.nextInt();
                    q.enqueue(value);
                    break;
                case 2:
                    q.dequeue();
                    break;
                case 3:
                    q.peek();
                    break;
                case 4:
                    q.display();
                    break;
                case 5:
                    System.out.println("Exit");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 5);

        sc.close();
    }
}
