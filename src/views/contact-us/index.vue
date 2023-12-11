<template>
    <div class="container mt-3 mb-4 about-container">
        <h5>About Us</h5>
        <hr />
        <p>
            If you have any questions, suggestions, touching, or inspiring stories or you just want to connect with me, I
            would love to hear from you!
        </p>
        <p class="mt-1">Please leave me an email through the Contact Form and I will get back with you as soon as possible.
            Otherwise,
            join us at our Facebook Group Middle Aged Humor.</p>
        <p class="mt-1"> We are only middle aged once, so stay classy and a bit bad assy!</p>
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

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.about-container {
    max-width: 768px;
}

@media (max-width: 525px) {
    .about-container {
        max-width: unset;
    }
}
</style>