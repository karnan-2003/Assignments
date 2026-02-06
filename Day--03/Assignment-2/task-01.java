// 1.ATM PIN Retry System
// Ask the user to enter a PIN.
// Allow unlimited attempts until the correct PIN is entered (use while).

import java.util.Scanner;

class ATMPinRetry {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int correctPin = 1234;
        int enteredPin = 0;

        while (enteredPin != correctPin) {
            System.out.print("Enter ATM PIN: ");
            enteredPin = scan.nextInt();

            if (enteredPin != correctPin) {
                System.out.println("Wrong PIN. Try again.");
            }
        }

        System.out.println("PIN accepted. Access granted.");
    }
}
