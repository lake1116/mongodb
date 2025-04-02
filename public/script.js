document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    
    try {
        const response = await fetch('http://localhost:3000/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });
        
        const data = await response.json();
        if (response.ok) {
            message.textContent = '사용자 정보가 저장되었습니다!';
            message.style.color = 'green';
        } else {
            message.textContent = '저장 실패: ' + data.error;
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = '서버 오류 발생!';
        message.style.color = 'red';
    }
    
    document.getElementById('userForm').reset();
});