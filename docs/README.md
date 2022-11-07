# 기능 분할

- 옵젝트 : 객체
    - 플레이어
    - 컴퓨터
- 동작 : 함수
    - ~~generateAnswer() 서로 다른 세 개의 수 생성~~  구현완료
        - ~~computer 배열이 입력된 number를 가지고 있지 않다면 push~~
        - ~~이를 세 번 반복~~
    - ~~getUserInput() 값을 입력받기~~ 구현완료
    - `isValidInput`()
        - 입력값이 정상적인지 체크
            - 잘못된 값을 입력받으면 throw문으로 예외 발생 후 종료
    - `gameManger`()
        1. `getResult`() 호출
        2. `getResult`()의 반환값인 Result배열의 Strike가 3이라면
            1. 게임 종료 출력
            2. `doesPlayerWantsRestart`() 호출 : 재시작 여부 사용자에게 질의
    - `getResult`()
        - 스트라이크 볼 낫싱 유무 판별기
            1. isNothing() 호출
            2. `getStrikeCount`() 호출
            3. `getBallCount`() 호출
            4. Result 배열에 결과값 담아 반환
    - `isNothing`()
        - 낫싱인지 체크
            - 같은 수를 아예 가지고 있지 않다면 1, 아니라면 0
    - `getStrikeCount`()
        - 스트라이크의 개수 반환
            - Count 반환
            - 같은 자리 && 같은 수 라면 Count++, 아니라면 0
    - `getBallCount`()
        - 볼의 개수 반환
            - Count 반환
            - 같은 수를 가지고 있다면 Count++, 아니라면 0
    - `doesPlayerWantsRestart`()
        - 재시작 여부 사용자에게 질의
            1. 사용자 화면에 게임 새로 시작여부 질문 출력
            2. 사용자 숫자 입력
                1. 1이면 true 반환
                2. 2이면 false 반환

| Day1 금 | Day2 토 | Day3 일 | Day4 월 | Day5 |
| --- | --- | --- | --- | --- |
| Bottom-Up 설계/구현 #1 | Bottom-Up 설계/구현 #2 | Top-Down 기능동작 확인 | 기능 구현 마감 & 리팩토링 및 고도화 | 최종 리팩토링 |
| 유저 값 입력 후 필터링 | isStrike(), isBall() 구현 | isStrikeOut() 구현 | 메서드 쪼개기 | 요구사항 및 코딩컨벤션 문서들 확인하며 리팩토링 |