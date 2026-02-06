
// 5.Validate Mobile Number Length
// Ask user to enter a 10-digit mobile number.
// If wrong, repeat —
// but the input prompt should run once minimum.


import java.util.Scanner;

class MobileNumberValidation {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        String mobile;

        do {
            System.out.print("Enter 10-digit mobile number: ");
            mobile = scan.nextLine();

            if (mobile.length() != 10) {
                System.out.println("Invalid mobile number. Try again.");
            }

        } while (mobile.length() != 10);

        System.out.println("Mobile number accepted.");
    }
}
