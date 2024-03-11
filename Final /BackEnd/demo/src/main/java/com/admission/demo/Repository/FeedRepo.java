package com.admission.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.admission.demo.Model.Feedback;

public interface FeedRepo extends JpaRepository<Feedback, Long>{
}
