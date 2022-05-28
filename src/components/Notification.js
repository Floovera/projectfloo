export function Notification(props) {
    const {showNotification} = props;
    if (!showNotification) return;
    return (
        <div className="notification-container">
            <p>Deze letter heb je al eens ingegeven.</p>
        </div>
    )
}