document.addEventListener('DOMContentLoaded', function() {
    const startMeetingButton = document.getElementById('startMeeting');
    const joinMeetingButton = document.getElementById('joinMeeting');

    startMeetingButton.addEventListener('click', function() {
        // Redirect to a new meeting room or implement your desired functionality.
        alert('Starting a new meeting...');
    });

    joinMeetingButton.addEventListener('click', function() {
        // Prompt the user for a meeting code or implement your desired functionality.
        const meetingCode = prompt('Enter the meeting code:');
        if (meetingCode) {
            // Redirect to the specified meeting room or handle the meeting joining.
            alert(`Joining meeting: ${meetingCode}`);
        }
    });
});
