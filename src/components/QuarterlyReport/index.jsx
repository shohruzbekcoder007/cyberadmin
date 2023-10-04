import React from 'react'

export default function QuarterlyReport() {
    return (
        <>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12 grid-margin">
                            <section className="content-header custom-header">
                                <h3>
                                    Choraklik hisobot
                                </h3>
                                <ol className="breadcrumb">
                                    <button className="btn btn-block"><i className="ti-plus"></i>
                                        Qo'shish</button>
                                </ol>
                            </section>
                            <form action="#" className="mt-30">
                                <div className="box-body table-responsive no-padding">
                                    <table className="table table-hover custom-table-report">
                                        <tr>
                                            <th>№</th>
                                            <th>Hisobot davri</th>
                                            <th>Chorak</th>
                                            <th>Berilgan sana</th>
                                            <th>Status</th>
                                            <th>Harakat</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>John Doe</td>
                                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback
                                                doner.</td>
                                            <td>11-7-2014</td>
                                            <td><button className="custom-btn-success">Approved</button></td>
                                            <td>Harakat</td>
                                            <td><a href="test_file.zip" download>Yuklab olish</a></td>
                                        </tr>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
