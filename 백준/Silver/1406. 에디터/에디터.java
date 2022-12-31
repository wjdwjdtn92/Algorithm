import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
	static Stack<Character> lStack = new Stack<Character>();
	static Stack<Character> rStack = new Stack<Character>();
	
	static void command(String s) {
		if(s.equals("L")) {
			if(!lStack.isEmpty()) {
				rStack.push(lStack.pop());
			}
		} else if(s.equals("D")) {
			if(!rStack.isEmpty()) {
				lStack.push(rStack.pop());
			}
		} else if(s.equals("B")) {
			if(!lStack.isEmpty()) {
				lStack.pop();
			}
		} else if (s.contains("P")) {	
			lStack.push(s.charAt(2));
		} else {
			return;
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuffer sb = new StringBuffer();
		
		try {
			String s = br.readLine();
			
			for (int i = 0; i < s.length(); i++){
				lStack.push(s.charAt(i));
			}
			int M = Integer.parseInt(br.readLine());
			
			for(int i = 0; i < M; i++) {
				String commandLine = br.readLine();
				command(commandLine);
			}
			
			while(!lStack.isEmpty()) {
				char a = lStack.pop();
				rStack.push(a);
			}
			
			while(!rStack.isEmpty()) {
				sb.append(rStack.pop());
			}
			
			System.out.println(sb);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
