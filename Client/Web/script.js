document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 방지
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    
    // 로그인 처리 로직 (예: API 호출 등)
    alert(`ID: ${id}, Password: ${password}`); // 테스트용 알림
});

// 카카오 로그인 버튼 클릭 이벤트 (여기에 실제 로그인 로직 추가 가능)
document.querySelector('.kakao-login').addEventListener('click', function() {
    alert('카카오 로그인 버튼 클릭됨!'); // 테스트용 알림
});

// 아이디 중복 확인 기능
document.querySelector('.check-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    
    // 예시: 서버에 아이디 중복 확인 요청 (여기서는 임의의 데이터 사용)
    const existingUsernames = ['user1', 'user2', 'user3']; // 기존 아이디들
    if (existingUsernames.includes(username)) {
        alert('이미 사용 중인 아이디입니다.');
    } else {
        alert('사용 가능한 아이디입니다.');
    }
});

// 비밀번호 일치 여부 확인
document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        event.preventDefault(); // 폼 제출 방지
    }
});
