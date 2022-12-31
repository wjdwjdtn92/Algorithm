import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class Main {
	static int countStick(String s) {
		int count = 0;
		int stickCount = 0;
		Stack<Integer> stack = new Stack<Integer>();

		for(int i = 0; i < s.length(); i++) {
			if(s.charAt(i) == '(') {
				count++;
				stack.push(i);
			} else {
				count--;
				if(stack.pop()+1 == i){
					stickCount += count;
				} else {
					stickCount += 1;
				}
			}
		}
		return stickCount;
	}
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      int result = countStick(br.readLine());
      System.out.println(result);
	}
}