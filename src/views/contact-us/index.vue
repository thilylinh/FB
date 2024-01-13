<template>
    <div class="about-container">
        <h1>About Us</h1>
        <hr />
        <p>
            If you have any questions, suggestions, touching, or inspiring stories or you just want to connect with me, I
            would love to hear from you!
        </p>
        <p class="mt-1">Please leave me an email through the Contact Form and I will get back with you as soon as possible.
            Otherwise,
            join us at our Facebook Group Middle Aged Humor.</p>
        <p class="mt-1"> We are only middle aged once, so stay classy and a bit bad assy!</p>

        <br />
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1">
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Subject</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Your message (optional)</label>
                <textarea type="text" class="form-control" id="exampleInputPassword1"> </textarea>
            </div>

            <button type="submit" class="btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.about-container {
    margin: 50px auto;
    max-width: 768px;
    min-height: 100vh;
    font-size: 16px;
    .mb-3 {
        margin-bottom: 10px;
    }

    .form-label {
        display: block;
    }
    .form-control {
        padding: 5px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #000;
    }

    .btn-primary {
        padding: 10px 20px;
        font-weight: 600;
        background-color: #1e90ff;
        color: #fff;
        border: none;
        border-radius: 5px;
    }
}

@media (max-width: 525px) {
    .about-container {
        max-width: unset;
        padding: 10px;
    }
}
</style>