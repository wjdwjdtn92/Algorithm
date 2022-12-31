import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
	static Stack<Integer> stack = new Stack<Integer>(); 
	static int m = 0;
	static StringBuffer sb = new StringBuffer();
	
	static boolean isStackPermutation(int x) {
		if(x > m) {
			while(x > m) {
				m++;
				stack.push(m);
				sb.append("+\n");
			}
			stack.pop();
			sb.append("-\n");
			return true;
		} else {
			while(!stack.isEmpty()) {
				if(stack.pop() == x) {
					sb.append("-\n");
					return true;
				}
			}
			return false;
		}
	}
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		for(int i = 0; i < n; i++) {
			int  x = Integer.parseInt(bf.readLine());
			
			if(!isStackPermutation(x)) {
				sb.setLength(0);
				sb.append("NO");
				break;
			}
		}
		System.out.println(sb);
	}
}
