export const downloadResumeHr = async () => {
  try {
    const response = await fetch('/marinladovic_cv_hr.pdf');
    const blob = await response.blob();
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'marinladovic_cv_hr.pdf');
    link.click();
  } catch (err) {
    console.log(err);
  }
};

export const downloadResumeEn = async () => {
  try {
    const response = await fetch('/marinladovic_cv_en.pdf');
    const blob = await response.blob();
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'marinladovic_cv_en.pdf');
    link.click();
  } catch (err) {
    console.log(err);
  }
};
