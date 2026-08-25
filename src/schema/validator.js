export const validateSchema = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: result.error.issues.map(({ path, message }) => ({
          path: path.join("."),
          message,
        })),
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};