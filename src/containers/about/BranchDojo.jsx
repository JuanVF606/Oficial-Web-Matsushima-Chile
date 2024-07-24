import React, { useEffect } from "react";
import { get_dojos } from "../../redux/actions/dojos/dojos";
import { connect } from "react-redux";
import BranchDojoCards from "../../containers/about/BranchDojoCards";
function BranchDojo({ get_dojos, dojos }) {
  useEffect(() => {
    const fetchDojos = async () => {
      try {
        await get_dojos();
      } catch (error) {
        console.log(error);
      }
    };
    fetchDojos();
  }, [get_dojos]);
  return (
    <>
      <BranchDojoCards dojos={dojos} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dojos: state.dojos.dojo_list,
  };
};

const mapDispatchToProps = {
  get_dojos,
};

export default connect(mapStateToProps, mapDispatchToProps)(BranchDojo);
