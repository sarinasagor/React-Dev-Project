function Contact() {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <div className="bg-gray-500 text-white p-5 space-y-4 min-h-screen">
            <h1>Contact Page</h1>

            <form onSubmit={submitHandler} className="space-y-4 m-auto max-w-lg">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="w-full px-2 py-1 rounded text-black" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="w-full px-2 py-1 rounded text-black" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="w-full px-2 py-1 rounded text-black"></textarea>
                </div>
                <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Contact;