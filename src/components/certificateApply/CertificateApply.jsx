import React, { useState } from 'react';
import './CertificateApply.css';

const CertificateApply = () => {
    const [selectedSchool, setSelectedSchool] = useState('');
    const [certificateType, setCertificateType] = useState('');

    return (
        <div className="certificate-container">
            <h2>Certificate Application Form</h2>
            <form
                className="certificate-form"
                action="https://api.web3forms.com/submit"
                method="POST"
            >
                <input type="hidden" name="access_key" value="99a36398-df7f-44fe-a4cd-eeccba85ab44" />

                <div className="form-group">
                    <label>School Name</label>
                    <select
                        name="school_name"
                        value={selectedSchool}
                        onChange={(e) => setSelectedSchool(e.target.value)}
                        required
                    >
                        <option value="">Select School</option>
                        <option value="P.E.M. High School & Jr. College">P.E.M. High School & Jr. College</option>
                        <option value="P.T. High School">P.T. High School</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Application for</label>
                    <select
                        name="certificate_type"
                        value={certificateType}
                        onChange={(e) => setCertificateType(e.target.value)}
                        required
                    >
                        <option value="">Select Certificate Type</option>
                        <option value="Leaving Certificate">Leaving Certificate</option>
                        <option value="Bonafide Certificate">Bonafide Certificate</option>
                        <option value="Study Certificate">Study Certificate</option>
                        <option value="Nirgum Utara">Nirgum Utara</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Name of the Student</label>
                    <input type="text" name="student_name" required />
                </div>
                <div className="form-group">
                    <label>G.R. No.</label>
                    <input type="text" name="gr_no" />
                </div>
                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="text" name="mobile_no" required />
                </div>
                <div className="form-group">
                    <label>Alternate No.</label>
                    <input type="text" name="alternate_no" />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea rows="2" name="address" required />
                </div>
                <div className="form-group">
                    <label>Standard/Class in which Admission taken</label>
                    <input type="text" name="admission_class" />
                </div>
                <div className="form-group">
                    <label>Admission Date</label>
                    <input type="date" name="admission_date" />
                </div>
                <div className="form-group">
                    <label>Standard when School left</label>
                    <input type="text" name="left_class" />
                </div>
                <div className="form-group">
                    <label>Passed/Failed</label>
                    <input type="text" name="result_status" />
                </div>
                <div className="form-group">
                    <label>Date when School left</label>
                    <input type="date" name="left_date" />
                </div>

                <div className="form-group submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CertificateApply;
