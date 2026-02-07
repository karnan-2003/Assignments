// Write a program to remove elements from both ends of a Deque :


class Deque {
    int[] deque;
    int front, rear, size;

    Deque(int size) {
        this.size = size;
        deque = new int[size];
        front = 0;
        rear = -1;
    }

    // Insert at rear (to add some elements)
    void insertRear(int value) {
        if (rear == size - 1) {
            System.out.println("Deque Overflow");
        } else {
            deque[++rear] = value;
        }
    }

    // Delete from front
    void deleteFront() {
        if (isEmpty()) {
            System.out.println("Deque Underflow (Front)");
        } else {
            System.out.println(deque[front++] + " removed from front");
        }
    }

    // Delete from rear
    void deleteRear() {
        if (isEmpty()) {
            System.out.println("Deque Underflow (Rear)");
        } else {
            System.out.println(deque[rear--] + " removed from rear");
        }
    }

    boolean isEmpty() {
        return front > rear;
    }

    void display() {
        if (isEmpty()) {
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

public class DequeRemove {
    public static void main(String[] args) {
        Deque d = new Deque(5);

        d.insertRear(10);
        d.insertRear(20);
        d.insertRear(30);

        d.display();

        d.deleteFront();
        d.deleteRear();

        d.display();
    }
}
