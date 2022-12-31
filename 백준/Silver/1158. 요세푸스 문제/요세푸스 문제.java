import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringJoiner;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringJoiner sj = new StringJoiner(", ");
		Queue<Integer> queue = new LinkedList<Integer>();
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		for(int i = 0; i < N; i++) {
			queue.offer(i+1);
		}
		int i = 1;
		
		while(!queue.isEmpty()) {
			if(i%K == 0) {
			sj.add((queue.poll().toString()));
			} else {
				queue.offer(queue.poll());
			}
			i++;
		}	
		System.out.println("<" + sj.toString() + ">");
	}
}
