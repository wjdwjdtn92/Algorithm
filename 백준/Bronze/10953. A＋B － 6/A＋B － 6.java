import java.util.Scanner;

public class Main {
	/*
	 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트
	 * 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. A와 B는 콤마(,)로 구분되어 있다. (0 < A, B < 10)
	 */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		sc.nextLine();
		
		for (int i = 0; i < T; i++) {
			int sum = 0;
			String[] str = sc.nextLine().split(",");
			
			for (String s : str){
				sum += Integer.parseInt(s);
			}
			System.out.println(sum);
		}
	}
}