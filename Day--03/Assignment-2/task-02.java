// 2.Password Validation Loop
// Ask user for a password.
// Continue asking while length < 8
// (show message “Password too short”).

import java.util.Scanner;

class PasswordValidation {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        String password = "";

        while (password.length() < 8) {
            System.out.print("Enter password: ");
            password = scan.nextLine();

            if (password.length() < 8) {
                System.out.println("Password too short");
            }
        }

        System.out.println("Password accepted");
    }
}
