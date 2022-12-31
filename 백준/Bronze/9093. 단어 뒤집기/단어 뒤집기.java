import java.util.Scanner;
import java.util.Stack;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int T = sc.nextInt();
		sc.nextLine();
		
		for(int i = 0; i < T; i++) {
			String sentence =sc.nextLine();
			String[] sentenceArray = sentence.split(" ");

			for(int j =0; j < sentenceArray.length; j++) {
				sentenceArray[j] = new StringBuffer(sentenceArray[j]).reverse().toString();
			}
			
			System.out.println(String.join(" ", sentenceArray));
		}
	}
}
