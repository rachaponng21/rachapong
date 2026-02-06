function Formpage() {
    return (
        <div className="bg-gray-700 w-screen h-screen">
            <div>
                <h1 className="text-3xl text-center">ลงทะเบียนเข้าสู่ระบบ</h1>
                <p className="text-center">กรุณากรอกข้อมูลของคุณ</p>
            </div>
            <div className="flex justify-center">
                <form className="w-96 space-y-4">
                    <h2>กรุณาระบุ E-Mail</h2>
                    <input type="text" placeholder="Type here" className="input" />
                    <h2>กรุณาระบุรหัสผ่าน</h2>
                    <input type="text" placeholder="Type here" className="input" />
                    <button className="btn btn-primary">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
}

export default Formpage;