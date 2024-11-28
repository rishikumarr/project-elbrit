import Image from "next/image";

const Blog = ({blogPosted, blogTitle, blogImg, index, className = ''}) => (
    <a href="#" className={`our-blog ${className}`}>
        {blogPosted && <span>{blogPosted}</span>}
        <p className="fnt-3 fnt-semi-bold">{blogTitle}</p>
        <div>
            <Image
                src={`/images/${blogImg}`}
                alt={`Blog image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    </a>
);

const OurBlogsSection = () => {
    const blogsArr = [
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog1-450x580.png'},
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog2-450x580.png'},
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog1-450x580.png'},
        {'blogPosted': null, 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog2-450x580.png'},
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog1-450x580.png'},
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog2-450x580.png'},
        {'blogPosted': '20 Apr', 'blogTitle': 'The Covid-19 Epidemic In 2022 Is Back', 'blogImg': 'blog1-450x580.png'},
        {'blogPosted': '17 Mar', 'blogTitle': 'Hac hendrerit mus nons semper suspendisse', 'blogImg': 'blog2-450x580.png'}
    ];

    return(
        <section className="section">
            <div className="section-large our-blogs-sec">
                <div className="our-blogs-intro">
                    <span className="fnt-4">Our Blog</span>
                    <p className="fnt-1-5 fnt-semibold sec-title">Latest News</p>
                </div>
                <div className="our-blogs-rows">
                {   
                    // I need to wrap 2 blogs inside a div with class name 'our-blogs-row', so if there are 8 blogs there will be 4 div with class name 'our-blogs-row'
                    blogsArr.reduce((rows, blog, index) => {
                        if (index % 2 === 0) {
                            rows.push([]);
                        }
                        rows[rows.length - 1].push(blog);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <div className="our-blogs-row" key={rowIndex}>
                            {row.map((blog, blogIndex) => {
                                const actualIndex = rowIndex * 2 + blogIndex;
                                // All these specified 0, 3, 4, 7 blog should have the class of span
                                const isSpan = [0, 3, 4, 7].includes(actualIndex);
                                return (
                                    <Blog 
                                        {...blog} 
                                        index={actualIndex} 
                                        key={blogIndex} 
                                        className={isSpan ? 'span' : undefined} 
                                    />
                                );
                            })}
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
}

export default OurBlogsSection;