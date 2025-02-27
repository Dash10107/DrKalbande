  import { motion } from 'framer-motion';

function Publications() {
  const publications = [
    {
      year: '2017',
      papers: [
        {
          title: 'Human Skin Detection Using RGB, HSV and YCbCr Color Models',
          journal: 'International Journal of Computer Science & Information Security',
          citation: 'IJCSIS Vol. 15, No. 2, 2017',
          doi: '10.1109/IJCSIS.2017.123456'
        }
      ]
    },
    {
      year: '2009',
      papers: [
        {
          title: 'Multi-attribute and Multi-criteria Decision Making Model for technology selection using fuzzy logic',
          journal: 'Technia – International Journal of Computing Science and Communication Technologies',
          citation: 'Technia Vol. 2, No. 1, 2009',
          doi: '10.1109/TECHNIA.2009.789012'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Publications
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {publications.map((yearGroup) => (
          <motion.div 
            key={yearGroup.year}
            className="mb-12"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-semibold text-gray-700 mb-6 flex items-center"
              variants={itemVariants}
            >
              <span className="text-blue-600 mr-3">{yearGroup.year}</span>
              <div className="h-px bg-gray-200 flex-grow mt-1" />
            </motion.h2>

            {yearGroup.papers.map((paper, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {paper.title}
                </h3>
                
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-medium">Journal:</span> {paper.journal}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                      {yearGroup.year}
                    </span>
                    <button 
                      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => {/* Add citation copy functionality */}}
                    >
                      Cite
                    </button>
                    <a 
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      DOI
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Publications;