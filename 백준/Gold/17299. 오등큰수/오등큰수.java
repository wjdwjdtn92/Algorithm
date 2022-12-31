import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Stack;

public class Main {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			StringBuffer sb = new StringBuffer();
			Stack<Integer> stack = new Stack<Integer>(); 
			
			int N = Integer.parseInt(br.readLine());
			String read = br.readLine();
			
			int[] result = new int[N];
			Arrays.fill(result, -1);
			
			String[] strSplit = read.split(" ");

			int[] count = new int[1000001];
			
			Arrays.fill(count, 0);
			
			for(int i = 0 ; i < N ; i++) {
				count[Integer.parseInt(strSplit[i])]++;
			}
			
			for(int i = 0; i < N; i++) {
				while(!stack.isEmpty() && count[Integer.parseInt(strSplit[i])] > count[Integer.parseInt(strSplit[stack.peek()])]) {
					result[stack.pop()]= Integer.parseInt(strSplit[i]);
				}
				stack.push(i);
			}

			for(int i : result) {
				sb.append(i + " ");
			}
			System.out.println(sb);
		
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
