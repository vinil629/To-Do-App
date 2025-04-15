function CheckboxStatus() {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <>
        <input
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div>{isChecked ? "checked" : "not checked"}</div>
      </>
    );
  }
  
  export default CheckboxStatus;