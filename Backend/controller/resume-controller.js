const resumeDataFromModel = require('../model/Resume');

const getAllresumeDetails = async(req, res, next) => {
    let resumes;

    try {
        resumes = await resumeDataFromModel.find()
    } catch (err) {
        console.log(err);
    }

    if (!resumes) {
        return res.status(404).json({ message: "No product found !!!" })
    }
    return res.status(200).json({ resumes })

}

const addResumeDetails = async(req, res, next) => {
    const {
        name,
        designation,
        email,
        phoneNumber,
        address,
        socialMedia,
        skills,
        yournotes,
        projects,
        achievemants,
        language,
        interest,
        ssc_mark,
        hssc_mark,
        btech_mark,
        image
    } = req.body
    let resume;
    try {
        resume = new resumeDataFromModel({
            name,
            designation,
            email,
            phoneNumber,
            address,
            socialMedia,
            skills,
            yournotes,
            projects,
            achievemants,
            language,
            interest,
            ssc_mark,
            hssc_mark,
            btech_mark,
            image
        });
        await resume.save();
    } catch (err) {
        console.log(err);
    }

    if (!resume) {
        return res.status(404).json({ message: "unable to Add !!!" })
    }
    return res.status(200).json({ resume })
}

const getById = async(req, res, next) => {
    const id = req.params.id;
    let resume2;

    try {
        resume2 = await resumeDataFromModel.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!resume2) {
        return res.status(404).json({ message: "unable to search by id !!!" })
    }
    return res.status(200).json({ resume2 })



}

const update = async(req, res, next) => {
    const {
        name,
        designation,
        email,
        phoneNumber,
        address,
        socialMedia,
        skills,
        yournotes,
        projects,
        achievemants,
        language,
        interest,
        ssc_mark,
        hssc_mark,
        btech_mark,
        image
    } = req.body
    const id = req.params.id;

    let resume3

    try {
        resume3 = await resumeDataFromModel.findByIdAndUpdate(id, {
            name,
            designation,
            email,
            phoneNumber,
            address,
            socialMedia,
            skills,
            yournotes,
            projects,
            achievemants,
            language,
            interest,
            ssc_mark,
            hssc_mark,
            btech_mark,
            image
        });
        resume3 = await resume3.save()
    } catch (err) {
        console.log(err)
    }
    if (!resume3) {
        return res.status(404).json({ message: "unable to update" })
    }
    return res.status(200).json(resume3)


}

const delete_details = async(req, res, next) => {
    const id = req.params.id;
    let resume4;
    try {
        resume4 = await resumeDataFromModel.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }

    if (!resume4) {
        return res.status(404).json({ message: "unable to delete" })
    }
    return res.status(200).json(resume4);
}

exports.getAllresumeDetails = getAllresumeDetails;
exports.addResumeDetails = addResumeDetails;
exports.getById = getById;
exports.update = update;
exports.delete_details = delete_details;