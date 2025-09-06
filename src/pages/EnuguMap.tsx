import React from 'react';

const EnuguMap: React.FC = () => {
    return (
        <div className="w-full">
            {/* Container for responsive Google Map */}
            <div className="relative w-full h-screen sm:h-sreen md:h-screen">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98114.73579347036!2d7.392359589062506!3d6.4923134762459425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1757155038547!5m2!1sen!2sus"
                    className="w-full h-full border-0" // Make iframe responsive and remove border
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Enugu Map"
                ></iframe>
            </div>
        </div>
    );
};

export default EnuguMap;
