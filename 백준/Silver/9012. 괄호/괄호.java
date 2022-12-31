import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	static boolean checkVPS(String ps) {
		int count = 0;
		
		for(int j = 0; j < ps.length(); j++) {
			if(ps.charAt(j) == '(') {
				count++;
			} else {
				count--;
				if(count < 0) {
					return false;
				}
			}
		}
		
		if(count == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());
        
		for(int i = 0; i < T; i++) {
			String ps = br.readLine();
			
			if(checkVPS(ps)) {
				bw.write("YES\n");
			} else {
				bw.write("NO\n");
			}
			
			bw.flush();
		}
	}
}
