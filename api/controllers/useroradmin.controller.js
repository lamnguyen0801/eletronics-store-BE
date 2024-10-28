module.exports.create = async (req, res) => {
    try {
        const product = new UserAdmin(req.body);
        const data = await UserAdmin.save();

        res.json({
            code: 200,
            message: "Tạo thành công!",
            data: data
        });
    } catch (error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}