
function randomStream() {
    return new ReadableStream({
      pull(controller) {
        controller.enqueue(Math.floor(Math.random() * 10000));
      }
    });
  }

// Create Stream
const stream = randomStream()
self.postMessage(stream, [stream]);

// Read Stream
self.onmessage = async (evt) => {
    const rs = evt.data;
    const reader = rs.getReader();
    const {value, done} = await reader.read();
    console.log(value); // logs 'hello'.
};