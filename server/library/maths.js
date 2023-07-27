function maths (request, response) { // localhost:8080/maths?num1=6&num2=392
    const {num1, num2} = request.query;
    const product = num1 * num2;
    response.json(product);
}

module.exports = maths;