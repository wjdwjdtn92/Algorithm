import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuffer sb = new StringBuffer();
		Stack<Character> stack = new Stack<Character>();
		
		String S = br.readLine();
		
		boolean tagFlag = false;
		
		for(char c : S.toCharArray()) {
			if(c == '<') {
				while(!stack.isEmpty()) {
					sb.append(stack.pop());
				}
				tagFlag = true;
				sb.append(c);
			} else if(c == '>') {
				tagFlag = false;
				sb.append(c);
			} else if(tagFlag){
				sb.append(c);
			} else if(c == ' '){
				while(!stack.isEmpty()) {
					sb.append(stack.pop());
				}
				sb.append(c);
			} else {
				stack.push(c);
			}
		}
		while(!stack.isEmpty()) {
			sb.append(stack.pop());
		}
		System.out.println(sb);
	}
}